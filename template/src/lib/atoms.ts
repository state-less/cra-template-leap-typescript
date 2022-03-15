import { Atom, atom } from 'jotai';

type Atoms = {
    [index: string]: Atom<any>;
};
/**
 * This file contains all atoms for shared states within your application.
 */
const atoms: Atoms = {
    primaryColor: atom(null),
    secondaryColor: atom(null),
    infoColor: atom(null),
    warningColor: atom(null),
    successColor: atom(null),
    errorColor: atom(null),
};
export default atoms;
