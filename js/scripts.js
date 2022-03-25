$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const type1 = $("input:radio[name=type1]:checked").val();
    const type2 = $("input:radio[name=type2]:checked").val();
    const type3 = $("input:radio[name=type3]:checked").val();
    const type4 = $("input:radio[name=type4]:checked").val();
    const type5 = $("input:radio[name=type5]:checked").parseInt();

    let result;
    if (type1 === "qs1answer1" && type2 === "qs1answer1" && type3 === "qs2answer2" && type4 === "qs1answer1" && 50000 <= type5 <= 70000) {
      result = "JavaScript"

    }

    $("#output").text(result);
  });
});
