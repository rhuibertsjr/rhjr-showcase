"use strict";
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
const APPLICATION_ID = "app";
/**
 * @brief:   This application is used on my portfolio website. It doens't use any
 *           frameworks nor libraries because of maintenance issues. It does use
 *           Typescript for documentation.
 *
 * @author:  René Huiberts <rhuibertsjr@gmail.com>
 */
(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const app_node = document.getElementById(APPLICATION_ID);
        if (app_node)
            app_node.appendChild(canvas.getElement());
        else
            return;
    });
    window.addEventListener("resize", () => {
        canvas.onResizeEventHandler();
    });
})();
/// index.ts ends here.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNERBQTREO0FBQzVELElBQUk7QUFDSix3RUFBd0U7QUFDeEUsd0VBQXdFO0FBQ3hFLHFFQUFxRTtBQUNyRSx1Q0FBdUM7QUFDdkMsSUFBSTtBQUNKLG1FQUFtRTtBQUNuRSxrRUFBa0U7QUFDbEUsaUVBQWlFO0FBQ2pFLGdEQUFnRDtBQUNoRCxJQUFJO0FBQ0oscUVBQXFFO0FBQ3JFLHlFQUF5RTtBQUV6RSxNQUFNLGNBQWMsR0FBVyxLQUFLLENBQUM7QUFFckM7Ozs7OztHQU1HO0FBQ0gsQ0FBQztJQUVHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDckQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV6RCxJQUFJLFFBQVE7WUFDUixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDOztZQUN6QyxPQUFPO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7UUFDekMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsdUJBQXVCIn0=