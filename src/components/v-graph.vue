<template>
    <div  class="graph" ref="chartdiv"></div>
</template>

<script>
import { mapGetters } from 'vuex'

import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

export default {
	name: 'VGraph',
	computed: {
		...mapGetters(['GET_GRAH_DATA'])
	},
	methods: {
		initGrah(){
		let root = am5.Root.new(this.$refs.chartdiv);

		const myTheme = am5.Theme.new(root);

		//Добавление кастомной темы
		myTheme.rule("LineSeries").setAll({
			fill: am5.color(0x9500fc),
			stroke: am5.color(0x9500fc),
		});

		root.setThemes([
			am5themes_Animated.new(root),
			myTheme
			]);

		let chart = root.container.children.push(
			am5xy.XYChart.new(root, {
			panY: false,
			layout: root.verticalLayout
			})
		);

		// Create Y-axis
		let yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
			renderer: am5xy.AxisRendererY.new(root, {})
			})
		);

		// Create X-Axis
		let xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
			renderer: am5xy.AxisRendererX.new(root, {}),
			categoryField: "date",
			})
		);

		xAxis.data.setAll(this.GET_GRAH_DATA);

		// Create series
		let series1 = chart.series.push(
			am5xy.SmoothedXLineSeries.new(root, {
			name: "Series",
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: "visits",
			categoryXField: "date",
			tooltip: am5.Tooltip.new(root, {})
			})
		);
		series1.data.setAll(this.GET_GRAH_DATA);

		series1.fills.template.setAll({
			visible: true,
			fillOpacity: 0.2,
		});

		//Add bullets
		series1.bullets.push(function () {
			return am5.Bullet.new(root, {
			locationY: 0,
			sprite: am5.Circle.new(root, {
				radius: 5,
				fill: series1.get("fill")
			})
			});
		});
		
		//Add labels
		series1.get("tooltip").label.set("text", "{categoryX.date()}: {valueY}")
		
		// Add cursor
		chart.set("cursor", am5xy.XYCursor.new(root, {
			behavior: "zoomX"
		}));

		this.root = root;
		}
	},
	
	mounted() {
		this.initGrah()  ///Инициализация графика
	},

	beforeDestroy() {
		if (this.root) {
		this.root.dispose();
		}
	},
	
	watch:{
		///Проверка наличия в localStorage ключа - ‘leadhit-site-id’
		$route:{
		immediate: true,
		handler() {
			if(!localStorage.getItem('id')) this.$router.replace({name:'main'})
		}
		}
	}
}
</script>

<style>

</style>