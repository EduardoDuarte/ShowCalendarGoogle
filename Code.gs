/*
*contact  :  eduardoduarte.83@gmail.com
*twitter  :  @duarteedu
*/

/**
 * Serves HTML of the application for HTTP GET requests.
*Var for send e-mail own calendar
*Var for ID Calendar 
 */


function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index.html');


  // Build and return HTML in IFRAME sandbox mode.
  return template.evaluate()
      .setTitle('Web App Window Title')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
