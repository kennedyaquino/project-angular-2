import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../autenticacao/usuario/usuario";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  user:Usuario = {};

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    this.router.navigate([""]);
  }

  retornaUsuarioExiste() {
    this.usuarioService.retornaUsuario().subscribe((value) => {
      this.user = value;
      return true;
    },
    (error) => {
      console.log(error);
      return false;
    }
    ) as Usuario;

  }

  ngOnInit(): void {
  }

}
