const insert=document.querySelector('#insert')
window.addEventListener("keyup",(e)=>{
insert.innerHTML=
`<div class="color">
<table style="width:100%">
  <tr>
    <th>key</th>
    <th>key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' ' ? 'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>`
})