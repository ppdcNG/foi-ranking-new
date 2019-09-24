(function ($) {

    $(function () {

        $.ajax({
            url: 'https://saslamp.github.io/foi/api.json',
            success: result => {
                for (let prop in result) {
                    $("#mda-name").text(prop);
                    break;
                }

                // let bpsr = result["BUREAU OF PUBLIC SERVICE REFORMS (BPSR)"]
                let { "BUREAU OF PUBLIC SERVICE REFORMS (BPSR)": bpsr } = result;
                let { pro_dis, foi_officers, data, rank } = bpsr;

                if (pro_dis === "Partial Pro") {
                    $("#pro_dis").html('<div class="bg-warning w-6 h-6 rounded-circle"></div>')
                }

                // 
                // level of disclosure
                // 
                function lvlDis(mda, id) {
                    if (mda === "full") {
                        $(id).append('<li class="text-success">Full</li>')
                    } else if (mda === "no") {
                        $(id).append('<li class="text-danger">No Disclosure</li>')
                    }
                }
                // brw
                let { lvl_dis: brw_dis, foi_training: brw_foi_tr } = rank[0].ranking
                lvlDis(brw_dis, "#brw-dis")

                // ppdc
                let { lvl_dis: ppdc_dis, foi_training: ppdc_foi_tr } = rank[1].ranking
                lvlDis(ppdc_dis, "#ppdc-dis")

                // budgit
                let { lvl_dis: budgit_dis, foi_training: budgit_foi_tr } = rank[2].ranking
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


            },
            error: e => console.log('error', e)
        });


    }); // end of document ready
})(jQuery);