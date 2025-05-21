import { Component, OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { AdministradoresService } from 'src/app/services/administradores.service';


@Component({
  selector: 'app-graficas-screens',
  templateUrl: './graficas-screens.component.html',
  styleUrls: ['./graficas-screens.component.scss']
})
export class GraficasScreensComponent implements OnInit{
  //Agregar chartjs-plugin-datalabels
  //variables
  public total_user: any={};
  //Histograma
  lineChartData={
    labels:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets:[
      {
        data:[89, 34, 43, 54, 28, 74, 93],
        label:'Registro de eventos académicos',
        backgroundColor:'#f88406'
      }
    ]
  }
  lineChartOption={
    responsive:false
  }
  lineChartPlugins=[ DatalabelsPlugin ];

  //Barras
  barChartData={
    labels:["Congreso", "FePro", "Presentación Doctoral", "Feria Matemáticas", "T-System"],
    datasets:[
      {
        data:[34, 43, 54, 28, 74],
        label: 'Registro de eventos académicos',
        backgroundColor:[
          '#f88406',
          '#fcff44',
          '#82d3fb',
          '#fb82f5',
          '#2ad84a'
        ]
      }
    ]
  }
  barChartOption={
    responsive:false
  }
  barChartPlugins=[ DatalabelsPlugin ];

  //Circular
  pieChartData={
    labels:["Administradores", "Maestros", "Alumnos"],
    datasets:[
      {
        data:[89, 34, 43],
        label:'Registro de usuarios',
        backgroundColor:[

          '#fcff44',
          '#f1c8f2',
          '#31e731'
        ]
      }
    ]
  }
  pieChartOption={
    responsive:false
  }
  pieChartPlugins=[ DatalabelsPlugin ];

  //Doughnut
  doughnutChartData={
    labels:["Administradores", "Maestros", "Alumnos"],
    datasets:[
      {
        data:[89, 34, 43],
        label:'Registro de usuarios',
        backgroundColor:[
          '#f88406',
          '#fcff44',
          '#31e7e7'
        ]
      }
    ]
  }
  doughnutChartOption={
    responsive:false
  }
  doughnutChartPlugins=[ DatalabelsPlugin ];



  constructor(
    private administradoresServices: AdministradoresService
  ){}

  ngOnInit(): void {
    this.obtenerTotalUsers();
    console.log("Data: ", this.doughnutChartData);
  }

  public obtenerTotalUsers(){
    this.administradoresServices.getTotalUsuarios().subscribe(
      (response)=>{
        this.total_user=response;
        console.log("Total usuarios: ", this.total_user);
      }, (error)=>{
        alert("No se pudo obtener el total de cada rol de usuarios");
      }
    );
  }
}
