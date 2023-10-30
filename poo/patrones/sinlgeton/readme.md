El patrón Singleton se usa para garantizar que una clase tenga solo una instancia en toda la aplicación.

En el caso de la configuración inicial de una aplicación, queremos asegurarnos de que haya una sola fuente de configuración para toda la aplicación, evitando duplicaciones y conflictos.

El código realizado sigue este patrón. La clase Configuracion tiene un método obtenerInstancia que devuelve siempre la misma instancia de la clase. Esto significa que, sin importar cuántas veces se llame a obtenerInstancia, siempre se obtendra la misma configuración inicial.

Es útil porque asegura que no haya conflictos en la configuración de la aplicación y proporciona un punto centralizado para acceder y modificar esta configuración.