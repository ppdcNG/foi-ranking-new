(function ($) {
    // published and submited
    // no report
    $(function () {

        $.ajax({
            url: 'https://saslamp.github.io/foi/api.json',
            success: result => {
                for (let prop in result) {
                    $("#mda-name").text(prop);
                    break;
                }

                // destructure out sections to be used

                // let bpsr = result["BUREAU OF PUBLIC SERVICE REFORMS (BPSR)"]
                let { "BUREAU OF PUBLIC SERVICE REFORMS (BPSR)": bpsr } = result;
                let { pro_dis, foi_officers, data, rank } = bpsr;

                let { comments } = data[0];
                $("#comments").html(comments)

                if (pro_dis === "Partial Pro") {
                    $("#pro_dis").html('<div class="bg-warning w-6 h-6 rounded-circle"></div><p>Partial</p>')
                }

                // 
                // level of disclosure
                // 
                function lvlDis(mda, id) {
                    if (mda === "full") {
                        $(id).append('<li class="text-success">Full Disclosure</li>')
                    } else if (mda === "no") {
                        $(id).append('<li class="text-danger">No Disclosure</li>')
                    }
                }
                // brw
                let { lvl_dis: brw_dis, foi_training: brw_foi_tr, level_response: brw_duration } = rank[0].ranking
                lvlDis(brw_dis, "#brw-dis")

                // ppdc
                let { lvl_dis: ppdc_dis, foi_training: ppdc_foi_tr, level_response: ppdc_duration } = rank[1].ranking
                lvlDis(ppdc_dis, "#ppdc-dis")

                // budgit
                let { lvl_dis: budgit_dis, foi_training: budgit_foi_tr, level_response: budgit_duration } = rank[2].ranking
                lvlDis(budgit_dis, "#budgit-dis")

                // 
                // foi training
                //
                function foiTr(mda, id) {
                    if (mda === "no") {
                        $(id).append('<li class="text-danger">No Training</li>')
                    }
                }
                // brw
                foiTr(brw_foi_tr, "#brw-foi-tr");
                // ppdc
                foiTr(ppdc_foi_tr, "#ppdc-foi-tr");
                // budgit
                foiTr(budgit_foi_tr, "#budgit-foi-tr")

                // 
                // foi desk officers
                //
                if (foi_officers === "full") {
                    $("#foi-desk-officers").html('<div class="bg-success w-6 h-6 rounded-circle"></div><p>Full</p>')
                } else if (foi_officers === "no") {
                    $("#foi-desk-officers").html('<div class="bg-danger w-6 h-6 rounded-circle"></div><p>None</p>')
                }

                // 
                // level of responsiveness to req. info
                //
                // brw
                let { date_received: brw_req, reponse_date: brw_res } = data[0]
                $("#brw-req-date").text(brw_req);
                $("#brw-res-date").text(brw_res);
                $("#brw-duration").text(`${brw_duration} days`);

                // ppdc
                let { date_received: ppdc_req, reponse_date: ppdc_res } = data[1]
                $("#ppdc-req-date").text(ppdc_req);
                $("#ppdc-res-date").text(ppdc_res);
                $("#ppdc-duration").text(`${ppdc_duration} days`);

                // budgit
                let { date_received: budgit_req, reponse_date: budgit_res } = data[2]

                if (budgit_res === "0000-00-00") {
                    budgit_res = "No response"
                }
                if (budgit_duration === "no") {
                    budgit_duration = 0
                }
                $("#budgit-req-date").text(budgit_req);
                $("#budgit-res-date").text(budgit_res);
                $("#budgit-duration").text(`${budgit_duration} days`);

                // 
                // annual report
                // 
                function checkAnnualReport(mda, id) {
                    if (mda === "published and submitted") {
                        $(id).append('<li class="text-success">Published and Submitted</li>')
                    } else if (mda === "submitted") {
                        $(id).append('<li class="text-warning">Submitted</li>')
                    } else if (mda === "no report") {
                        $(id).append('<li class="text-danger">No report</li>')
                    }
                }
                // brw
                let { annual_report: brw_annual_report } = data[0]
                checkAnnualReport(brw_annual_report, "#brw-annual-rpt");

                // ppdc
                let { annual_report: ppdc_annual_report } = data[1]
                checkAnnualReport(ppdc_annual_report, "#ppdc-annual-rpt");

                // budgit
                let { annual_report: budgit_annual_report } = data[2]
                checkAnnualReport(budgit_annual_report, "#budgit-annual-rpt");

            },
            error: e => console.log('error', e)
        });


    }); // end of document ready
})(jQuery);