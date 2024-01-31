import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File-Storages-Frontend';

  //mammot = require("mammoth")

  ngOnInit(): void {

   // this.tests();
  }

  // tests(){
  //   this.mammot.convertToHtml({path : "/assets/DocumentoSocorro.docx"})
  //   .then((result) =>{
  //     const html = result.value;
  //     document.getElementById("contenido-docx").innerHTML = html;
  //   })
  //   .done();
  // }


  
}
