el patrón Command se utiliza para encapsular una solicitud como un objeto, lo que permite parametrizar clientes con operaciones, encolar solicitudes, o registrar y deshacer operaciones. El patrón se compone principalmente de:

Comando (Command): Define una interfaz para ejecutar una acción particular.

Invocador (Invoker): Solicita que se realice una operación.

Receptor (Receiver): Sabe cómo realizar la operación asociada con el comando.

Cliente (Client): Crea un comando y lo asocia con su receptor.
