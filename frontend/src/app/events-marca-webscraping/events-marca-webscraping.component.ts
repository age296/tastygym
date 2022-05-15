import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Marca } from 'src/marca';
import { WebscrapingMarcaService } from 'src/webscraping-marca.service';

@Component({
  selector: 'app-events-marca-webscraping',
  templateUrl: './events-marca-webscraping.component.html',
  styleUrls: ['./events-marca-webscraping.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class EventsMarcaWebscrapingComponent implements OnInit {

  MarcaResults: Marca[] = []
  constructor(private webscrapingMarcaService: WebscrapingMarcaService) { }

  ngOnInit() {
    this.getElements()
  }

  getElements (){
    this.webscrapingMarcaService.getApiResults().subscribe(data => 
      {
        this.MarcaResults = data
        console.log(data)
      }
      )
  }

}
