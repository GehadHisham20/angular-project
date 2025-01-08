import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProjectDetailsComponent } from './container/project-details/project-details.component';
import { FeaturedProductComponent } from './container/featured-product/featured-product.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProjectDetailsComponent,
    FeaturedProductComponent,

    //directives
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
