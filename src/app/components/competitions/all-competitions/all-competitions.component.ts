import { Component } from '@angular/core';
import { Competition } from 'src/app/core/models/Competition.model';
import { CompetitionService } from 'src/app/core/services/competition.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-all-competitions',
  templateUrl: './all-competitions.component.html',
  styleUrls: ['./all-competitions.component.css']
})
export class AllCompetitionsComponent {
  constructor(private competitonService: CompetitionService) {}
  competitions:Competition[] =[];
  isShowAddForm : boolean = false;
  isShowUpdateForm : boolean = false;
  page: number = 0;
  totalPages: number = 0;
  id:String = '';

  ngOnInit() {
    this.getData(this.page);
  }

  getData(page:number) {
    this.competitonService.getSomeData(page).subscribe(
      data => {
        this.competitions = data.content
        this.totalPages = data.totalPages
      }
    );
  }

  delete(id:String) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ['Cancel', 'OK'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.competitonService.deleteData(id).subscribe(
          ()=> this.getData(this.page)
        )
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {  
         swal("Your imaginary file is safe!");
      }
    });
  }

  showupdateForm(id:String)
  {
    this.isShowUpdateForm = true;
    this.id=id;
  }

  closeUpdateForm()
  {
    this.isShowUpdateForm = false;
    this.getData(this.page);
  }

  closeAddForm()
  {
    this.isShowAddForm = false;
    this.getData(this.page);
  }

  nextPage()
  {
    if(this.page+2<=this.totalPages)
    {
      this.page=++this.page
      this.getData(this.page)
    } 
  }

  prevPage()
  {
    if(this.page-1>=0)
    {
      this.page = --this.page;
      this.getData(this.page)
    } 
  }
}
