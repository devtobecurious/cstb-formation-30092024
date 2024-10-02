import { AsyncPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { filter, finalize, map, Observable, Subscription, tap } from 'rxjs';
import { TestOnePipe } from '../test-one.pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-discover-obs',
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, JsonPipe, TestOnePipe],
  templateUrl: './discover-obs.component.html',
  styleUrl: './discover-obs.component.css'
})
export class DiscoverObsComponent {// implements OnInit, OnDestroy {
  movie = {
    title: 'A new Hope'
  }
  //maPipe = inject(TestOnePipe)
  // private containerOfsubscriptions = new Subscription()



  // COLD OBSERVABLE
  singTitle$ = new Observable<string>(subscriber => {
    console.info('-----')

    const random = Math.random() * 100
    console.info('SYNC', random)

    subscriber.next('Oh marie')

    setTimeout(() => {
      console.info('ASYNC', random)
      // subscriber.error('ooops error')
      subscriber.next('Allumer le feu')
      setTimeout(() => {
        subscriber.next('Diego')
        subscriber.complete()
      }, 1500);
    }, 1500);

    console.info('****')
  }).pipe(
    tap(item => console.info('observation', item)), // lecteur seule
    filter(item => item.length <= 8),
    tap(item => console.info('observation 2', item)), // lecteur seule
    map(item => item.length),
    map(item => item * 10),
    finalize(() => console.info('fin !!!'))
  )


  // singTitleSignal = toSignal(this.singTitle$)

  // ngOnInit(): void {
  //   const sub$ = this.singTitle$.subscribe({
  //     next: item => console.info('Oh un retour de l\'obs', item),
  //     error: err => console.info(err),
  //     complete: () => console.info('tout fini')
  //   }) // les données à l'intérieur de chaque subscribe sont uniques !
  //   // this.singTitle$.subscribe() // attention : chaque subscribe déclenche la fonction interne de l'observable

  //   this.containerOfsubscriptions.add(sub$)
  // }

  // ngOnDestroy(): void {
  //   this.containerOfsubscriptions.unsubscribe()
  // }
}
