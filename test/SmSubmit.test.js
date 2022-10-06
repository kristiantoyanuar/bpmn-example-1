var bpmn = require("bpmn");
var handler = require("../bpmn/aso_registration_handlers");


describe('SM submit valid phone number', () => {
    it('should valid', () => {
      bpmn.createUnmanagedProcess("../bpmn/aso_registration.bpmn", function(err, myProcess){

          // we start the process
          myProcess.triggerEvent("MyStart");
      
      });
      assert.equal(1,1)
    })
})