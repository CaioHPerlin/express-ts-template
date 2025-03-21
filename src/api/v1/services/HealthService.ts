import Formatter from '../../../Formatter'

class HealthService {

    public static getHealthService(): HealthStatus {
        const memoryUsageMB = process.memoryUsage().rss / (1024 * 1024)
        const uptime = Formatter.padNumber(process.uptime())

        return {
            uptime,
            memoryUsageMB,
        }: HealthStatus
    }

}
