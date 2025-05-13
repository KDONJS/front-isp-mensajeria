const contacts = ['Juan Pérez', 'Ana Gómez', 'Luis Torres'];

export function ChatBox() {
  return (
    <div >
      <div>💬</div>
      <h2>Este es tu espacio</h2>
      <p>
        Este chat es de uso exclusivo para ti. Úsalo para borradores,
        enviarte archivos o conocer las características del chat un poco mejor.
      </p>

      <div>
        <h3>Contactos</h3>
        <ul>
          {contacts.map((name, idx) => (
            <li key={idx}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
