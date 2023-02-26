let install1 = document.getElementById("installId1");

install1.addEventListener("click", () => {
  setTimeout(() => {
    var windowReference = window.open("./GachaArt.html");

    myService.getUrl().then(function (url) {
      windowReference.location = url;
    });
  }, 1000);
});

let install2 = document.getElementById("installId2");
install2.addEventListener("click", () => {
  setTimeout(() => {
    var windowReference = window.open("./GachaClub.html");

    myService.getUrl().then(function (url) {
      windowReference.location = url;
    });
  }, 1000);
});

let install3 = document.getElementById("installId3");
install3.addEventListener("click", () => {
  setTimeout(() => {
    var windowReference = window.open("./GachaNox.html");

    myService.getUrl().then(function (url) {
      windowReference.location = url;
    });
  }, 1000);
});

let install4 = document.getElementById("installId4");
install4.addEventListener("click", () => {
  setTimeout(() => {
    var windowReference = window.open("./GachaPlus.html");

    myService.getUrl().then(function (url) {
      windowReference.location = url;
    });
  }, 1000);
});

let install5 = document.getElementById("installId5");
install5.addEventListener("click", () => {
  setTimeout(() => {
    var windowReference = window.open("./GachaPop.html");

    myService.getUrl().then(function (url) {
      windowReference.location = url;
    });
  }, 1000);
});

$(document).ready(function () {
  // start con1
  $("#myBtnId1").click(function () {
    $("#downAreaId1").show();
  });
  $("#myBtnId1").click(function () {
    $("#installingId1").show();
  });
  $("#myBtnId1").click(function () {
    $("#installId1").hide();
  });

  // end con1

  // start con2
  $("#myBtnId2").click(function () {
    $("#downAreaId2").show();
  });
  $("#myBtnId2").click(function () {
    $("#installingId2").show();
  });
  $("#myBtnId2").click(function () {
    $("#installId2").hide();
  });
  // end con2

  // start con3
  $("#myBtnId3").click(function () {
    $("#downAreaId3").show();
  });
  $("#myBtnId3").click(function () {
    $("#installingId3").show();
  });
  $("#myBtnId3").click(function () {
    $("#installId3").hide();
  });
  // end con3

  // start con4
  $("#myBtnId4").click(function () {
    $("#downAreaId4").show();
  });
  $("#myBtnId4").click(function () {
    $("#installingId4").show();
  });
  $("#myBtnId4").click(function () {
    $("#installId4").hide();
  });
  //   end con4

  // start con5
  $("#myBtnId5").click(function () {
    $("#downAreaId5").show();
  });
  $("#myBtnId5").click(function () {
    $("#installingId5").show();
  });
  $("#myBtnId5").click(function () {
    $("#installId5").hide();
  });
  //   end con5
});
