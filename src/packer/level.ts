import { b34djToLevelData, d4cToLevelData, type B34DJChart, type D4CChart } from 'sonolus-d4dj-engine'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    const chartJson = JSON.parse(await chart.text()) as B34DJChart | D4CChart
    const levelData = !chartJson.MusicName ? d4cToLevelData(chartJson, offset / 1000) : b34djToLevelData(chartJson, offset / 1000)

    return { type: 'json', data: levelData }
}
