El patrón Bridge es un patrón de diseño estructural que separa una abstracción de su implementación, permitiendo que ambas puedan variar independientemente. Esto se logra mediante la creación de una "puente" entre la abstracción y su implementación, lo que facilita la modificación y extensión de ambas partes por separado.

Supongamos que estamos creando un sistema de ventas que puede realizar ventas en diferentes monedas y a diferentes tipos de clientes, como minoristas y mayoristas.

Este ejemplo demuestra cómo el patrón Bridge permite desacoplar la abstracción de su implementación, lo que facilita la extensión y modificación de ambas partes por separado. En este caso, se pueden agregar nuevas monedas sin modificar el código existente de la clase Venta.
