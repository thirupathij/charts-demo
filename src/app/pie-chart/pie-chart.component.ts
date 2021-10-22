import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent { 
  
  //Common Config
  chartType =  ChartType.PieChart;
  width = 550;
  height = 400;

  //mainPie config
  options = {
    //legend: 'none'
  };
    
  pieData = [
    ['UK', 100],
    ['Germany', 200],
    ['Australia', 300],
    ['USA', 400],
    ['CANADA', 500]
  ];

  //subPie config
  countryName: any = "";
  countryValue: any = 0;
  showSubPie:boolean = false;
  subPieData = [
    ['Region 1', 500],
    ['Region 2', 600],
    ['Region 3', 800],
    ['Region 4', 200],
    ['Region 5', 100],
    ['Region 6', 500],
    ['Region 7', 600],
    ['Region 8', 800],
    ['Region 9', 200],
    ['Region 10', 100]
  ];
  subPieOptions = {
    title: "",    
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6','#e0220e', '#e1193e', '#edcc6e', '#f3b54f', '#f7a7b6']
  };

  openSubPie() {
    this.showSubPie = true;
  }
  onSelect(e:any){   
    let selectedIndex = e.selection[0].row;
    this.countryName = this.pieData[selectedIndex][0];
    this.countryValue = this.pieData[selectedIndex][1];
    //console.log("Country Name: "+this.countryName+" Country Value:"+this.countryValue);
    //this.subPieOptions.title = "Showing regions of "+this.countryName+" with value "+this.countryValue; //commented this for better sytling through heading element
    this.showSubPie = true;
  }

}
