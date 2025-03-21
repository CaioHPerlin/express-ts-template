
class Formatter {

    public static padNumber(value: number, padding: number = 0): string {
        const paddingString = '0'

        paddingString.repeat(padding)

        return (value < 10 ? paddingString : '') + value;
    }

    public static formatSeconds(seconds: number): string {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor(seconds % (60 * 60) / 60);
        const seconds = Math.floor(seconds % 60);
          
        return padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
    }

}

