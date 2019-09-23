var profile = document.getElementById("profile").addEventListener('click', function () {
    console.log("Hola");
    var profile1 = document.getElementById("content").innerHTML = `                <div class="user container">Usuario : sasdas</div>
    <form class="container">
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputEmail4">Nombre</label>
                <input type="email" class="form-control" id="inputName" placeholder="Nombre">
            </div>
            <div class="form-group col-md-4">
                <label for="inputPassword4">Apellido</label>
                <input type="password" class="form-control" id="inputSubname" placeholder="Apellido">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputState2">Estado civil</label>
                <select id="inputState2" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
        </div>

        <div class="form-group col-md-5">
            <label for="inputAddress">Fecha de nacimiento</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="form-group col-md-5">
            <label for="inputAddress2">Obra social</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Obra social">
        </div>

        <div class="form-row">
            <div class="form-group col-md-5">
                <label for="inputCity">Direccion</label>
                <input type="text" class="form-control" id="inputCity">
            </div>

            <div class="form-group col-md-4">
                <label for="inputZip">Correo</label>
                <input type="text" class="form-control" id="inputZip">
            </div>
        </div>
        <div class="form-group col-md-4">
                <label for="inputAddress3">Telefono</label>
                <input type="text" class="form-control" id="inputAddress3" placeholder="3813102312">
            </div>

        <button type="submit" class="btn btn-primary">Modificar datos</button>
    </form>`;
})
var profile = document.getElementById("appointments").addEventListener('click', function () {
    console.log("Hola1");
    var profile1 = document.getElementById("content").innerHTML = `                <div class="user container">Usuario : asdsasasdas</div>
    <form class="container">
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="inputState">Sacar turno</label>
                <select id="inputState" class="form-control">
                    <option selected>Area...</option>
                    <option>Cirugia</option>
                    <option>Internacion</option>
                    <option>Neonatologia</option>
                    <option>Neurocirugia</option>
                    <option>Nutricion</option>
                </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputState2">Profesional</label>
                <select id="inputState2" class="form-control">
                    <option selected>Choose...</option>
                    <option>Lopez, Facundo</option>
                    <option>Juarez, Diego</option>
                    <option>Druck, Alon (recomendado)</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
            <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
            </div>
            <div class="form-group col-md-4">
            <label for="inputPassword4">Telefono de contacto</label>
            <input type="" class="form-control" id="inputSubname" placeholder="Telefono">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sacar turno</button>
    </form>
    <br><br>
    <table class=" container table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Dia</th>
      <th scope="col">Hora</th>
      <th scope="col">Area</th>
      <th scope="col">Medico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>15/10/2019</td>
      <td>18:30</td>
      <td>Cirugia</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>18/11/2019</td>
      <td>15:30</td>
      <td>Internacion</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>05/3/2020</td>
      <td>10:00</td>
      <td>Neonatologia</td>
      <td>Druck, Alon</td>
    </tr>
    
  </tbody>
</table>
    
    `;
})
var profile = document.getElementById("history").addEventListener('click', function () {
    console.log("Hola2");
    var profile1 = document.getElementById("content").innerHTML = `                
    <br><br>
    <p class="text-center" style="font-size: 40px;">Historial clinico</p>

    <table class=" container table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Dia</th>
      <th scope="col">Hora</th>
      <th scope="col">Opcion??</th>
      <th scope="col">Medico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>15/10/2018</td>
      <td>18:30</td>
      <td>Turno</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>18/11/2018</td>
      <td>15:30</td>
      <td>Internacion</td>
      <td>Druck, Alon</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>05/03/2019</td>
      <td>10:00</td>
      <td>Operacion</td>
      <td>Druck, Alon</td>
    </tr>

  </tbody>
</table>
`;
})
var profile = document.getElementById("doctors").addEventListener('click', function () {
    console.log("Hola3");
    var profile1 = document.getElementById("content").innerHTML = `                <div class="user container">Usuario : asdsasasdas</div>
    <form class="container">
    <p class="text-center" style="font-size: 30px;">Ginecologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>

        <p class="text-center" style="font-size: 30px;">Traumatologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;"">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="http://argentinosenirlanda.ie/wp-content/uploads/2017/06/Trabajar-de-m%C3%A9dico-en-Irlanda.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="http://argentinosenirlanda.ie/wp-content/uploads/2017/06/Trabajar-de-m%C3%A9dico-en-Irlanda.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center" style="font-size: 30px;">Neonatologia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center" style="font-size: 30px;">Neurocirugia</p>
        <div class="container">
            <div class="row">
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
                <div class="col-3 card">
                    <img src="https://www.derechoenzapatillas.com/wp-content/uploads/2017/05/what-doctors-say2.jpg" alt="Avatar" style="width:100%; height: 170px;">
                    <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Ginecologo</p>
                    </div>
                </div>
            </div>
        </div>




    
    `;
})
var profile = document.getElementById("familiargroup").addEventListener('click', function () {
    console.log("Hola4");
})