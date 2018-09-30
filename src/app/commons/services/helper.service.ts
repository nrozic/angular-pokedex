import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor() { }

    /**
     * Method that will check if array is null or empty
     *
     * @static
     * @param {any[]} array
     * @returns {boolean}
     * @memberof HelperService
     */
    static arrayIsNullOrEmpty(array: any[]): boolean {
        return !array || array.length === 0;
    }

    /**
     * Method accepts array of string with delimiter and returns concatenated string
     *
     * @static
     * @param {string[]} arrayOfStrings
     * @param {string} delimiter
     * @returns {string}
     * @memberof HelperService
     */
    static concatenateString(arrayOfStrings: string[], delimiter: string): string {
        if (this.arrayIsNullOrEmpty(arrayOfStrings)) { return ''; }

        let result = '';

        for (const s of arrayOfStrings) {
            result += (s + delimiter);
        }

        return result;
    }

    static saveStringToLocalStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static saveObjectToLocalStorage(key: string, object: any) {
        this.saveStringToLocalStorage(key, JSON.stringify(object));
    }

    static getStringFromLocalStorage(key: string): string {
        return localStorage.getItem(key);
    }

    static getObjectFromLocalStorage(key: string): any {
        return JSON.parse(this.getStringFromLocalStorage(key));
    }

    static removeItemFromLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    static clearLocalStorage() {
        localStorage.clear();
    }

}
