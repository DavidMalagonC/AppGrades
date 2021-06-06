import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successfulAlert(message: string)
  {
    Swal.fire({
        text: message,
        icon: 'success'
      });
  }
  FailedAlert(message: string)
  {
   Swal.fire('Oops...', message, 'error')
  }
  
  opensweetalertcst(message: string){
    Swal.fire({
      title: '¿Estas seguro?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
      Swal.fire(
        'Hecho!',
        ':).',
        'success'
      )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        ':)',
        'error'
      )
      }
    })
  }



}
