Manual Básico de git
=
Definición
-
Git es un sistema distribuido de control de versiones libre y de código abierto diseñado para manejar proyectos pequeños hasta grandes  con rapidez y eficiencia.

Configuración
-
Descargar para [Mac OS X][1], [Windows ][2], [Linux][3]
[1]: https://git-scm.com/download/mac
[2]: https://git-scm.com/download/win
[3]: https://git-scm.com/download/linux

Crear un repositorio nuevo
-
Abrimos la terminal:
* En Windows la <b> consola Git Bash </b>

* En Mac y Linux la <b> terminal </b>

Creamos un directorio nuevo con el comando
<pre> <b>mkdir</b> nombre_directorio</pre>
![creamos directorio](https://raw.githubusercontent.com/PROTECO/cursoweb_junio2016/master/dist/1.png)

Entramos al directorio
<pre> <b>cd</b> nombre_directorio </pre>
![entramos al directorio](https://raw.githubusercontent.com/PROTECO/cursoweb_junio2016/master/dist/2.png)

y ejecutamos para crear un nuevo repositorio <b> local </b> de git
<pre> <b>git init</b> </pre>
![creando repositorio](https://raw.githubusercontent.com/PROTECO/cursoweb_junio2016/master/dist/3.png)

Ahora vamos a configurar nuestro nombre y correo con el que registraremos los commits

<pre> <b>git config --global user.name </b>"John Doe" </pre>

<pre> <b>git config --global user.email </b> "john@dominio.com" </pre>

Si queremos verificar los valores que guardamos, podemos escribir el siguiente comando y nos tiene que devolver su contenido
<pre> <b>git config --get user.name </b></pre>
<pre> <b>git config --get user.email </b></pre>
##### **IMPORTANTE: Estos pasos solo se tienen que seguir la primera vez**

---


