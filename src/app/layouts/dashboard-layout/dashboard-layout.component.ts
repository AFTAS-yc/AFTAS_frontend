import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  sideBar() {
    var side = document.querySelectorAll('.side');
    var sideBar = document.querySelectorAll('.sideBar');
    var image = document.querySelectorAll('.image')
    image[0].classList.toggle('w-8');
    image[0].classList.toggle('h-8');
    if (sideBar[0].classList.contains('w-[60px]')) {
        sideBar[0].classList.replace('max-sm:ml-[-58px]', 'max-sm:ml-0');
        sideBar[0].classList.replace('w-[60px]', 'w-60');
    } else {
        sideBar[0].classList.replace('w-60', 'w-[60px]');
        sideBar[0].classList.replace('max-sm:ml-0', 'max-sm:ml-[-58px]');
    }
    for (var i in side) {
        if (side[i].classList) {
            side[i].classList.toggle('hidden');
        }
    }
}
}
