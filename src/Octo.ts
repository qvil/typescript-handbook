export default class Octopus {
  readonly numberOfLegs: number = 8;
  // constructor(private readonly name: string) { // Error
  constructor(readonly name: string) { // publis is OK
  }
}
