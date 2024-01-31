import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.css']
})
export class DownloadPDFComponent {

  generarPDF(): void {
    // Crear un objeto jsPDF
    const pdf = new jsPDF();


    // Agregar contenido al PDF y posicion del contenido 

    //Logo de al empresa
    var imgLogoEIS = new Image();
    imgLogoEIS.src = './assets/EIS_logo.jpg'

    pdf.addImage(imgLogoEIS,'jpg',6,6,18,12);
    //titulo de la empresa
    pdf.text('Elkay Interior Systems Latin America S. de R.L. de C.V.', 40, 10);
    pdf.text('Proceso de evaluación de desempeño 2023', 40,50);



    // Descargar el PDF
    pdf.save('tests.pdf');
  }
  


}
