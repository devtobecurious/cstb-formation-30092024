import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-discover-obs',
  standalone: true,
  imports: [],
  templateUrl: './discover-obs.component.html',
  styleUrl: './discover-obs.component.css'
})
export class DiscoverObsComponent implements OnInit, OnDestroy {
  private containerOfsubscriptions = new Subscription()

  // COLD OBSERVABLE
  singTitle$ = new Observable<string>(subscriber => {
    console.info('-----')
    const random = Math.random() * 100

    console.info('SYNC', random)

    subscriber.next('COUCOU')

    setTimeout(() => {
      console.info('ASYNC', random)
      // subscriber.error('ooops error')
      subscriber.next('COUCOU ASYNC')
      subscriber.complete()
    }, 1500);

    console.info('****')
  })

  ngOnInit(): void {
    const sub$ = this.singTitle$.subscribe({
      next: item => console.info('Oh un retour de l\'obs', item),
      error: err => console.info(err),
      complete: () => console.info('tout fini')
    }) // les données à l'intérieur de chaque subscribe sont uniques !
    // this.singTitle$.subscribe() // attention : chaque subscribe déclenche la fonction interne de l'observable

    this.containerOfsubscriptions.add(sub$)
  }

  ngOnDestroy(): void {
    this.containerOfsubscriptions.unsubscribe()
  }
}
