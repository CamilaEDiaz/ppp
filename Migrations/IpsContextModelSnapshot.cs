﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Practica.Models;

namespace Practica.Migrations
{
    [DbContext(typeof(IpsContext))]
    partial class IpsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Practica.Models.IpsItem", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("liquidacion")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("salario")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("vHospitalizacion")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("id");

                    b.ToTable("IpsItems");
                });
#pragma warning restore 612, 618
        }
    }
}
