import { Route } from '@angular/router';
import { GlowingBackgroundComponent } from 'src/app/hompage/glowing-background/glowing-background.component';
import { PersonComponent } from '../../hompage/person/person.component';
import { BlankComponent } from '../blank/blank.component';

interface AppRoute extends Route {
    name: string;
}

export const routes: AppRoute[] = [
    { name: 'home', path: '', component: BlankComponent },
    // { name: 'fef-stars-journey', path: 'fef-stars-journey', component: BlankComponent },
    { name: 'person', path: 'person', component: PersonComponent },
    { name: 'auto', path: 'auto', component: PersonComponent }
]
