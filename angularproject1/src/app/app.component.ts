import { Component } from '@angular/core';
import { ApiService } from '../service/ProductService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  products: any[] | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
