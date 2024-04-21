function doGet() {
    return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  }
  
  function include(filename){
    return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
  }
  
  function createUser(obj){
    // let folder = DriveApp.getFileById('1k29ls3YXL0mV7dnUxUO2STbk1NNiXt3Z')
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1')
    let data = ss.getRange(1,1,ss.getLastRow(),1).getValues()
    var maxNum = 0
    data.forEach(r =>{
      maxNum = r[0] >maxNum? r[0]: maxNum
    })
    var newId = maxNum+1
    ss.appendRow([
      newId,
      obj.inputUser,
      obj.inputEmail,
      obj.inputPassword,
      obj.inputPasswordtrue
    ])
  }
  
  function checkLogin(obj){
    const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1')
    const data = ss.getDataRange().getDisplayValues()
  
    let user = data.find(r => r[2] == obj.email && r[3] == obj.password)
    return user
  }
  
  
  
  
  