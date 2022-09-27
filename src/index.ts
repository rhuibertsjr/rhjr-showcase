/// Copyright (c) 2022 René Huiberts <rhuibertsjr@gmail.com>
/// 
/// This program is free software: you can redistribute it and/or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
/// 
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// GNU General Public License for more details.
/// 
/// You should have received a copy of the GNU General Public License
/// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const APPLICATION_ID: string = "app";

/**
 * @brief:   The Canvas class hold the main elements of the WebGL renderer. It
 *           handles the canvas HTML element and the callback for the event
 *           listeners.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
class Canvas
{
    public id: string = "renderer";

    private static INSTANCE: Canvas;

    private element: HTMLCanvasElement;
    private context: WebGL2RenderingContext | null;

    private width: number = window.innerWidth;
    private height: number = window.innerHeight;

    private constructor()
    {
		this.element.width = this.width;
		this.element.height = this.height;

        this.context = this.element.getContext("webgl2")
    }
    
    public static getInstance(): Canvas
    {
        if (!Canvas.INSTANCE) 
			Canvas.INSTANCE = new Canvas();
		return Canvas.INSTANCE;
    }

    public getContext(): WebGL2RenderingContext
    {
        if (!this.context)
            throw new Error("WebGL 2 is not available on your System.");
        return this.context
    }

    public getElement(): HTMLElement { return this.element; }

    public getWidth(): number { return this.width; }
    public getHeight(): number { return this.height; }    
};

/**
 * @brief:   This application is used on my portfolio website. It doens't use any
 *           frameworks nor libraries because of maintenance issues. It does use
 *           Typescript for documentation.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
class Shader
{
    public create(
        context: WebGL2RenderingContext, source: string, type: number): WebGLShader
    {
        let shader: WebGLShader;

        if ((shader = context.createShader(shader)) === null)
		    throw new Error("Something went wrong while creating a shader.");

		context.shaderSource(shader, source);
		context.compileShader(shader);

		if (this.context.getShaderParameter(shader, context.COMPILE_STATUS))
		    return shader;

        /* Free memory */
		console.error(context.getShaderInfoLog(shader));
		context.deleteShader(shader);
		
		throw new Error("Creating the shader failed.")
    }
}

/**
 * @brief:   This application is used on my portfolio website. It doens't use any
 *           frameworks nor libraries because of maintenance issues. It does use
 *           Typescript for documentation.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
class Program
{
    private vertex_shader: WebGLShader;
	private fragment_shader: WebGLShader;

    public constructor(vertex_shader: WebGLShader ,fragment_shader: WebGLShader)
    {
        this.vertex_shader   = vertex_shader; 
        this.fragment_shader = fragment_shader;
    }

    public create(context: WebGL2RenderingContext): WebGLProgram
    {
        let program: WebGLProgram | null;

		if ((program = context.createProgram()) === null)
		    throw new Error("Something went wrong while creating the program");

        context.attachShader(program, this.vertex_shader);
		context.attachShader(program, this.fragment_shader);

		context.linkProgram(program);

        if (context.getProgramParameter(program, context.LINK_STATUS))
		    return program;

		/* Free memory */
		console.error(context.getProgramInfoLog(program));
		context.deleteProgram(program);

		throw new Error("Creating Program failed.")
    }
}

/**
 * @brief:   The SceneController controls the scene inside the WebGL context. The
 *           setup() function initialize the scene, and the tick() function executes
 *           every frame.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
class SceneController
{
    public id: string = "scene_controller";

    private context: WebGL2RenderingContext;

    public constructor(context: WebGL2RenderingContext)
    {
        this.context = context;
    }

    public setup()
    {
        let scene = new Program(
            new Shader(this.context, "", this.context.VERTEX_SHADER), 
            new Shader(this.context, "", this.context.FRAGMENT_SHADER)
        ).create(this.context);
    }

    public tick()
    {
        for(;;)
        {
            
        }
    }
    
}

/**
 * @brief:   This application is used on my portfolio website. It doens't use any
 *           frameworks nor libraries because of maintenance issues. It does use
 *           Typescript for documentation.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
(function(): void {

    const canvas = Canvas.getInstance();
    const scene_controller =
        new SceneController(CANVAS.getContext());

    document.addEventListener("DOMContentLoaded", (): void => {
        const app_node = document.getElementById(APPLICATION_ID);

        if (app_node)
            app_node.appendChild(CANVAS.getElement());
        else return;
    });

    window.addEventListener("resize", (): void => {
        
    });

    scene_controller.setup();
    scene_controller.tick();

})();

/// index.ts ends here.
