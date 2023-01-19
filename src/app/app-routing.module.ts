import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/pages/about/about.component";
import { FeatureComponent } from "./components/pages/feature/feature.component";
import { HomeComponent } from "./components/pages/home/home.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feature',
        component: FeatureComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }