exports.StartEvent_0ik0yjr = function(data, done) {
    console.log("starting sm registration with data " + data)
    done(data)
}

exports.Gateway_1hy27jj = function (data, done) {
    console.log("checking to db if phone number is already exist")
    if (data.phoneNumber == '123') {
        data.message = "Phone number is already exist";
        data.isError = true;
    } else {
        data.isError = false;
    }
    done(data);
}

exports.Event_1tmlmjz = function (data, done) {
    console.log("registration stopped, phone number is already exist")
}

exports.Activity_16mu1ox = function(data, done) {
    console.log("sending registration link via WA")
    done(data)
}

exports.Event_0c85h0g = function (data, done) {
    console.log("registration finished, aso shoule be recevied a link from WA")
}