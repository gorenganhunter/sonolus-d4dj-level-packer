import { b34djToLevelData, type B34DJChart } from 'sonolus-d4dj-engine'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const b34djChart = JSON.parse(await chart.text()) as B34DJChart
    const levelData = b34djToLevelData(b34djChart, offset)

    return { type: 'json', data: levelData }
}
