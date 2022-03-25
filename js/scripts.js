$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const type1 = $("input:radio[name=type1]:checked").val();
    const type2 = $("input:radio[name=type2]:checked").val();
    const type3 = $("input:radio[name=type3]:checked").val();
    const type4 = $("input:radio[name=type4]:checked").val();
    const type5 = $("input:radio[name=type5]:checked").val();

    let result;
    if (type1 === "qsanswer1" && type2 === "qsanswer1" && type3 === "qsanswer2" && type4 === "qsanswer1" && 50000 <= type5 <= 70000) {
      result = "JavaScript"

    } else if (type1 === "qsanswer2" && type2 === "qsanswer1" && type3 === "qsanswer1" && type4 === "qsanswer2" && 70000 < type5 <= 120000) {
      result = "Python"
    } else if (type1 === "qsanswer1" && type2 === "qsanswer2" && type3 === "qsanswer1" || "qsanswer2" && type4 === "qsanswer2" || "qsanswer1" && 30000 <= type5 < 50000) {
      result = "Swift"
    }

    $("#output").text(result);
  });
});
