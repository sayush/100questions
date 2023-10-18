var data = null;

function main() {
  $.getJSON("questions.json", function (data) {
    function pick() {
      random = Math.floor(Math.random() * data.length);
      display(data[random]);
      $("#answers").hide();
    }

    function getAnswerList(answerArr) {
      var cList = $("<ul/>").attr("class", "list-group list-group-flush");
      $.each(answerArr, function (i) {
        $("<li/>").attr("class", "list-group-item").append(answerArr[i]).appendTo(cList);
      });
      return cList;
    }

    function display(unit) {
      $("#category").text(unit["category"]);
      $("#section").text(unit["section"]);
      $("#question").text(unit["question"]);
      $("#answers").empty();
      $("#answers").append(getAnswerList(unit['answers']));
    }

    $("#btn_answers").click(function () {
      $("#answers").toggle();
    });

    $("#btn_next").click(function () {
      pick();
    });

    pick();
  });
}

$(document).ready(main);
