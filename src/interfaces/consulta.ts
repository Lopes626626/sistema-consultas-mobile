export interface Consulta {
  id: string;
  data: Date;
  medico: Medico;     // ← usado em vários lugares
  paciente: Paciente; // ← usado em vários lugares
  // ...
}
