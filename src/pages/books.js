import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Books" useTitleTemplate={true} noIndex={true} />
      <Page>
        {/* <LegalSection sectionId="imprint" heading="Books" /> */}
        <div>
          <style dangerouslySetInnerHTML={{ __html: "\n\t\t#customize-list{\n\t\t\tfloat:left;\n\t\t\tmargin-left:20px;\n\t\t\tlist-style:none;\n\t\t}\n\t  #gr_updates_widget{\n\t\tfloat:left;\n\t\tborder-radius: 5px;\n\t\tbackground-color:#fff;\n\t\tborder:solid #683205 10px;\n\t\t-webkit-box-shadow: 0px 0px 4px 1px #595959,\n\t\tinset 0px 0px 0px 1px #7D730B;\n\t\t-moz-box-shadow: 0px 0px 4px 1px #595959,\n\t\tinset 0px 0px 0px 1px #7D730B;\n\t\tbox-shadow: 0px 0px 4px 1px #595959,\n\t\tinset 0px 0px 0px 1px #7D730B;\n\t\tpadding:15px 0 0px 15px;\n\t\twidth:840px;\n\t\theight:800px;\n\tmargin-left: 300px;\n\t\t  }\n\t  #gr_footer{\n\t\tmargin-bottom:0px;\n\t\theight:30px;\n\t  }\n\t  #gr_updates_widget p{\n\t\tpadding:0px;\n\t\tmargin:0;\n\t\tfont-size:14px;\n\t  }\n\t  #gr_footer img{\n\t\twidth:100px;\n\t\tfloat:left;\n\t  }\n\t" }} />
          <div id="gr_updates_widget">
            <iframe sandbox id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=800&num_updates=100&user=85395306&width=800" width={798} height={730} frameBorder={0} />
            <div id="gr_footer">
              <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png" /></a>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
