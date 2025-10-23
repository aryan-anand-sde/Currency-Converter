async function fetchData(value, currency) {
  let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_qjUMSV2Xdzn56NQrNM3SCBtEQmKeCFIESIGRdiZF&base_currency=${currency}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let mystr = "";
  document.querySelector("#output").style.display = "block";
  for (let key of Object.keys(data["data"])) {
    mystr += `<tr>
  <td>${key}</td>
  <td>${data["data"][key]["code"]}</td>
  <td>${data["data"][key]["value"] * value}</td>
  </tr>`;
  }
  const tableBody = document.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = mystr;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const currency = document.querySelector("select[name='currency']").value;
  const value = parseInt(document.querySelector("input[name='amount']").value);
  fetchData(value, currency);
});
