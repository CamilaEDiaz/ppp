using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Practica.Models;
namespace DotNetAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IpsController : ControllerBase
    {
        private readonly IpsContext _context;
        public IpsController(IpsContext context)
        {
            _context = context;
            if (_context.IpsItems.Count() == 0)
            {
                // Crea un nuevo Taskitem si la coleccion esta vacia
                // Lo que significa que no puedes borrar todas los TaskItems.
                _context.IpsItems.Add(new IpsItem { vHospitalizacion = 1, salario= 6, liquidacion=7 });
                _context.SaveChanges();
            }
        }

        //GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IpsItem>>> GetTaskItem(){
            return await _context.IpsItems.ToListAsync();
        }
        // GET: api/Task/5
         [HttpGet("{id}")]
        public async Task<ActionResult<IpsItem>> GetTaskItem(int id)
        {
            var taskItem = await _context.IpsItems.FindAsync(id);
            if (taskItem == null)
            {
                return NotFound();
            }
            return taskItem;
        } 

        //POST: api/Task
        [HttpPost]
        public async Task<ActionResult<IpsItem>> PostTaskItem(IpsItem item){
            _context.IpsItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new IpsItem{id= item.id}, item);
        }

        //PUT: api/Task/5
        /*  [HttpPut("{codigo}")]
        public async Task<IActionResult> PutTaskItem(int codigo, TaskItem item){
            if(codigo != item.Codigo){
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        } */

        //PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, IpsItem item){
            if(id != item.id){
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        } 

        //DELETE: api/Task/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIpsItem(int id){
            var IpsItem = await
            _context.IpsItems.FindAsync(id);
            if(IpsItem == null){
                return NotFound();
            }

            _context.IpsItems.Remove(IpsItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}


