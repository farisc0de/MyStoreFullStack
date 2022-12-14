import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './layout/app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { OrdercompleteComponent } from './ordercomplete/ordercomplete.component';

@NgModule({
  declarations: [AppComponent, ProductlistComponent, HomeComponent, CartComponent, ProductcardComponent, CheckoutComponent, ProductComponent, OrdercompleteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
