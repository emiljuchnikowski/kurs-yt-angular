import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: "about",
        loadComponent: () => import("./pages/about/about.component").then(c => c.AboutComponent)
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
];