import moment from "moment";
/**
 * cont types of logers
 */
const types: any = {
	server: "[SERVER]",
	database: "[DATABASE]",
	request: "[REQUESTED]",
	response: "[RESPONSE]",
	error: "[ERROR]",
	files: "[FILE]",
	message: "[MESSAGE]",
	system: "[SYSTEM]",
};

/**
 * color of loggers
 */
const colors: any = {
	null: "\x1b[30m",
	error: "\x1b[31m",
	success: "\x1b[32m",
	warning: "\x1b[33m",
	info: "\x1b[34m",
	system: "\x1b[35m",
	important: "\x1b[36m",
	message: "\x1b[37m",
};

/**
 * Backgrounds of loggers
 */
const background: any = {
	null: "\x1b[40m",
	error: "\x1b[41m",
	success: "\x1b[42m",
	warning: "\x1b[43m",
	info: "\x1b[44m",
	system: "\x1b[45m",
	important: "\x1b[46m",
	message: "\x1b[47m",
};

/**
 * Typography type
 */
const decorators: any = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",
};

/**
 * Options of logger
 */
export interface ILoggerOptions {
	color?: string;
	type?: string;
	background?: string;
	decorator?: string;
}

/**
 * Logger class to print with colors or format epcified
 */
export class Logger {
	/**
	 * Time setter
	 */
	private static date(): string {
		const currentDate = moment().utc();
		let formattedDate = currentDate.format("MMMM Do YYYY, h:mm:ss a");
		return formattedDate;
	}

	/**
	 * Select the type of log
	 * @param type the type of log [server, database, network, file, message]
	 */
	private static selectType(type: string): string {
		if (Object.keys(types).includes(type)) {
			return types[type];
		} else {
			return types.message;
		}
	}

	/**
	 * Select the color format of the title message
	 * @param color the color name
	 */
	private static selectColor(color: string): string {
		if (Object.keys(colors).includes(color)) {
			return color;
		} else {
			return "message";
		}
	}

	/**
	 * return the string colorized
	 * @param msg string message
	 * @param format color format
	 */
	public static color(message: string, options: ILoggerOptions = {}): string {
		let dec = "";
		if (options.background && Object.keys(background).includes(options.background as string)) {
			dec += background[options.background as string];
		}
		if (options.decorator && Object.keys(decorators).includes(options.decorator as string)) {
			dec += decorators[options.decorator as string];
		}
		if (!options.color) options.color = "message";
		return dec + colors[options.color as string] + message + decorators.reset;
	}

	/**
	 * the function responsable for the log
	 * @param options object tha contain the type, color and message
	 */
	public static log(message: any, options: ILoggerOptions = {}) {
		options.type = this.selectType(options.type || "");
		options.color = this.selectColor(options.color || "");

		console.log(`   ${this.color(options.type, options)} ${this.color("(" + this.date() + ")", options)} ${message}`);
	}
}
