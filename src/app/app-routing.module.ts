import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BbstarComponent} from '../app/bbstar/bbstar.component';
import {BannerComponent} from '../app/banner/banner.component';
import { HomekitchenComponent } from '../app/homekitchen/homekitchen.component';
import { EggsmeatComponent } from '../app/eggsmeat/eggsmeat.component';
import { PrecautionaryComponent } from '../app/precautionary/precautionary.component';
import { CombostoreComponent } from '../app/combostore/combostore.component';
import { DealsOfWeekComponent } from '../app/deals-of-week/deals-of-week.component';
import { CitibankComponent } from '../app/citibank/citibank.component';
import { IcicibankComponent } from '../app/icicibank/icicibank.component';
import { HsbcbankComponent } from '../app/hsbcbank/hsbcbank.component';
import { IdbibankComponent } from '../app/idbibank/idbibank.component';
import { MaskGlovesComponent } from '../app/mask-gloves/mask-gloves.component';
import { SanitizersComponent } from '../app/sanitizers/sanitizers.component';
import { StationeryComponent } from '../app/stationery/stationery.component';
import { BeautyAtHomeComponent } from '../app/beauty-at-home/beauty-at-home.component';
import { ChipsNamkeensComponent } from '../app/chips-namkeens/chips-namkeens.component';
import { BiscuitsCookiesComponent } from '../app/biscuits-cookies/biscuits-cookies.component';
import { FrozenSnacksComponent } from '../app/frozen-snacks/frozen-snacks.component';
import { SauceSpreadsComponent } from '../app/sauce-spreads/sauce-spreads.component';
import { SoupsNoodlesComponent } from '../app/soups-noodles/soups-noodles.component';
import { HomeUnderComponent } from '../app/home-under/home-under.component';
import { PartyEssentialsComponent } from '../app/party-essentials/party-essentials.component';
import { BinsBathwareComponent } from '../app/bins-bathware/bins-bathware.component';
import { NonStickCookwareComponent } from '../app/non-stick-cookware/non-stick-cookware.component';
import { CrockeryGlasswareComponent } from '../app/crockery-glassware/crockery-glassware.component';
import { SoapsShowerGelsComponent } from '../app/soaps-shower-gels/soaps-shower-gels.component';
import { MensGroomingComponent } from '../app/mens-grooming/mens-grooming.component';
import { DeosFragrancesComponent } from '../app/deos-fragrances/deos-fragrances.component';
import { OralCareComponent } from '../app/oral-care/oral-care.component';
import { FeminineHygieneComponent } from '../app/feminine-hygiene/feminine-hygiene.component';





const routes: Routes = [
  {path:'',component:BannerComponent},
  {path:'bbstar' , component:BbstarComponent},
  {path:'homekitchen',component:HomekitchenComponent},
  {path:'eggsmeat',component:EggsmeatComponent},
  {path:'precautionary',component:PrecautionaryComponent},
  {path:'combostore',component:CombostoreComponent},
  {path:'deals-of-week',component:DealsOfWeekComponent},
  {path:'citibank',component:CitibankComponent},
  {path:'icicibank',component:IcicibankComponent},
  {path:'hsbcbank',component:HsbcbankComponent},
  {path:'idbibank',component:IdbibankComponent},
  {path:'mask-gloves',component:MaskGlovesComponent},
  {path:'sanitizers',component:SanitizersComponent},
  {path:'stationery',component:StationeryComponent},
  {path:'beauty-at-home',component:BeautyAtHomeComponent},
  {path:'chips-namkeens',component:ChipsNamkeensComponent},
  {path:'biscuits-cookies',component:BiscuitsCookiesComponent},
  {path:'frozen-snacks',component:FrozenSnacksComponent},
  {path:'sauce-spreads',component:SauceSpreadsComponent},
  {path:'soups-noodles',component:SoupsNoodlesComponent},
  {path:'home-under',component:HomeUnderComponent},
  {path:'party-essentials',component:PartyEssentialsComponent},
  {path:'bins-bathware',component:BinsBathwareComponent},
  {path:'non-stick-cookware',component:NonStickCookwareComponent},
  {path:'crockery-glassware',component:CrockeryGlasswareComponent},
  {path:'soaps-shower-gels',component:SoapsShowerGelsComponent},
  {path:'mens-grooming',component:MensGroomingComponent},
  {path:'deos-fragrances',component:DeosFragrancesComponent},
  {path:'oral-care',component:OralCareComponent},
  {path:'feminine-hygiene',component:FeminineHygieneComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
