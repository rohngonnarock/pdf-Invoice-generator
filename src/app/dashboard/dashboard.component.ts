import { Component, OnInit } from '@angular/core';

declare var html2pdf: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generatePdf() {
    const invoice = document.getElementById('invoice');
    console.log(invoice);
    console.log(window);
    var opt = {
      margin: .5,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().from(invoice).set(opt).save();
  }

}
