import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatDividerModule} from '@angular/material/divider';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { BbstarComponent } from './bbstar/bbstar.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomekitchenComponent } from './homekitchen/homekitchen.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EggsmeatComponent } from './eggsmeat/eggsmeat.component';
import { CombostoreComponent } from './combostore/combostore.component';
import { PrecautionaryComponent } from './precautionary/precautionary.component';
import { DealsOfWeekComponent } from './deals-of-week/deals-of-week.component';
import { CitibankComponent } from './citibank/citibank.component';
import { HsbcbankComponent } from './hsbcbank/hsbcbank.component';
import { IcicibankComponent } from './icicibank/icicibank.component';
import { IdbibankComponent } from './idbibank/idbibank.component';
import { MaskGlovesComponent } from './mask-gloves/mask-gloves.component';
import { SanitizersComponent } from './sanitizers/sanitizers.component';
import { StationeryComponent } from './stationery/stationery.component';
import { ChipsNamkeensComponent } from './chips-namkeens/chips-namkeens.component';
import { BeautyAtHomeComponent } from './beauty-at-home/beauty-at-home.component';
import { BiscuitsCookiesComponent } from './biscuits-cookies/biscuits-cookies.component';
import { FrozenSnacksComponent } from './frozen-snacks/frozen-snacks.component';
import { SauceSpreadsComponent } from './sauce-spreads/sauce-spreads.component';
import { SoupsNoodlesComponent } from './soups-noodles/soups-noodles.component';
import { HomeUnderComponent } from './home-under/home-under.component';
import { PartyEssentialsComponent } from './party-essentials/party-essentials.component';
import { BinsBathwareComponent } from './bins-bathware/bins-bathware.component';
import { NonStickCookwareComponent } from './non-stick-cookware/non-stick-cookware.component';
import { CrockeryGlasswareComponent } from './crockery-glassware/crockery-glassware.component';
import { SoapsShowerGelsComponent } from './soaps-shower-gels/soaps-shower-gels.component';
import { MensGroomingComponent } from './mens-grooming/mens-grooming.component';
import { DeosFragrancesComponent } from './deos-fragrances/deos-fragrances.component';
import { OralCareComponent } from './oral-care/oral-care.component';
import { FeminineHygieneComponent } from './feminine-hygiene/feminine-hygiene.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    BannerComponent,
    FooterComponent,
    DialogComponent,
    BbstarComponent,
    LoginComponent,
    HomekitchenComponent,
    EggsmeatComponent,
    PrecautionaryComponent,
    CombostoreComponent,
    DealsOfWeekComponent,
    CitibankComponent,
    IcicibankComponent,
    HsbcbankComponent,
    IdbibankComponent,
    MaskGlovesComponent,
    SanitizersComponent,
    StationeryComponent,
    BeautyAtHomeComponent,
    ChipsNamkeensComponent,
    BiscuitsCookiesComponent,
    FrozenSnacksComponent,
    SauceSpreadsComponent,
    SoupsNoodlesComponent,
    HomeUnderComponent,
    PartyEssentialsComponent,
    BinsBathwareComponent,
    NonStickCookwareComponent,
    CrockeryGlasswareComponent,
    SoapsShowerGelsComponent,
    MensGroomingComponent,
    DeosFragrancesComponent,
    OralCareComponent,
    FeminineHygieneComponent
    
  ],
  entryComponents:[DialogComponent,LoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    NgbModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
